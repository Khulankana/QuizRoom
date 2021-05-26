<%@page import="testendee.web.test.UnitTestMethod"%>
<%@page import="testendee.web.test.UnitTestModule"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Функцүүд</title>
<script src="https://code.jquery.com/jquery-1.10.2.js"
	type="text/javascript"></script>

<style>
.collapsible {
	background-color: #777;
	color: white;
	cursor: pointer;
	padding: 18px;
	width: 100%;
	border: none;
	text-align: left;
	outline: none;
	font-size: 15px;
}

.active, .collapsible:hover {
	background-color: #555;
}

.collapsible:after {
	content: '\002B';
	color: white;
	font-weight: bold;
	float: right;
	margin-left: 5px;
}

.active:after {
	content: "\2212";
}

.content {
	padding: 0 18px;
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.2s ease-out;
	background-color: #f1f1f1;
}
</style>

</head>
<body>
	<table>
		<tr>
			<td><a href="unittest">
					<button>Нүүр хуудас</button>
			</a></td>
			<td><input type="number" id="txtUserId"
				placeholder="Хэрэглэгчийн дугаар" /></td>
		</tr>
	</table>
	<hr />
	<h2 id="h2Lookup"><%=request.getAttribute("beanName")%></h2>
	<hr />

	<c:forEach items="${moduleList}" var="m">
        ${m} <br />
	</c:forEach>

	<%
		ArrayList<UnitTestMethod> items = (ArrayList<UnitTestMethod>) request.getAttribute("methodList");
	String var = null;
	for (int i = 0; i < items.size(); i++) {
		var = items.get(i).getName();
	%>
	<button class="collapsible" id="btnExecute<%=i%>Method"><%=var%>
	</button>
	<div class="content">
		<p hidden="true" id="btnExecute<%=i%>ParamHash"><%=items.get(i).getParamHash()%></p>
		<table>
			<tr>
				<td><textarea id="btnExecute<%=i%>Req" cols="90" rows="16">[<%=items.get(i).getJson()%>]</textarea></td>
				<td>
					<button style="width: 200px" class="btnExecute"
						id="btnExecute<%=i%>">Ажиллуулах</button> <br />
					<button style="width: 200px; margin-top: 6px" class="btnLoadData"
						id="btnLoad<%=i%>">Сүүлд ажиллуулсан өгөгдөл</button>
				</td>
				<td><textarea id="btnExecute<%=i%>Resp" readonly="readonly"
						cols="90" rows="16"></textarea></td>
			</tr>
		</table>
	</div>
	<%
		}
	%>

	<script>
		var coll = document.getElementsByClassName("collapsible");
		var i;

		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			});
		}

		$(document).ready(
				function() {
					var userId = localStorage.getItem("userId");
					if (userId) {
						$('#txtUserId').val(userId);
					}

					$('.btnExecute').click(
							function() {
								var userId = $('#txtUserId').val();
								if (userId) {
									localStorage.setItem('userId', userId);
								}

								var btnId = event.target.id;

								var method = $('#' + btnId + 'Method').text();
								var paramHash = $('#' + btnId + 'ParamHash')
										.text();
								var data = $('#' + btnId + 'Req').val();

								try {
									var obj = JSON.parse(data);
									data = JSON.stringify(obj, null, 4);
									$('#' + btnId + 'Req').val(data);
								} catch (e) {
									alert("Параметрийн бүтэц алдаатай байна.");
									return;
								}

								if (data) {
									var key = $('#h2Lookup').text()
											+ '_btnLoad_' + method + '_'
											+ paramHash;
									localStorage.setItem(key, data);
								}

								$.ajax({
									type : 'POST',
									url : '',
									data : data,
									headers : {
										'Content-Type' : 'application/json',
										'Accept' : 'application/json',
										'lookup' : $('#h2Lookup').text(),
										'method' : method,
										'paramHash' : paramHash,
										'userId' : userId
									},
									success : function(responseText) {
										try {
											var obj = JSON.parse(responseText);
											$('#' + btnId + 'Resp').text(
													JSON
															.stringify(obj,
																	null, 4));
										} catch (e) {
											$('#' + btnId + 'Resp').text(
													responseText);
										}
									}
								});
							});

					$('.btnLoadData')
							.click(
									function() {

										var btnId = event.target.id;
										var btnIx = btnId.substring(7);

										var method = $(
												'#btnExecute' + btnIx
														+ 'Method').text();
										var paramHash = $(
												'#btnExecute' + btnIx
														+ 'ParamHash').text();

										var key = $('#h2Lookup').text()
												+ '_btnLoad_' + method + '_'
												+ paramHash;

										var data = localStorage.getItem(key);
										if (data) {
											$('#btnExecute' + btnIx + 'Req')
													.val(data);
										}
									});
				});
	</script>
</body>
</html>