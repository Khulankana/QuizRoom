<%@page import="testendee.web.test.UnitTestModule"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Unit Test</title>

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
	<h2>Unit Test</h2>
	<hr />

	<c:forEach items="${moduleList}" var="m">
        ${m} <br />
	</c:forEach>

	<%
		ArrayList<UnitTestModule> items = (ArrayList<UnitTestModule>) request.getAttribute("moduleList");
		String var = null;
		List<String> beans = null;
		for (int i = 0; i < items.size(); i++) {
			var = items.get(i).getName();
			beans = items.get(i).getBeans();
	%>
	<button class="collapsible"><%=var%></button>
	<div class="content">
		<table>
			<%
				for (int j = 0; j < beans.size(); j++) {
			%>
			<tr height="40px">
				<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
				<td><%=beans.get(j)%></td>
				<td><a href="unittestbean?bean=<%=var + "/" + beans.get(j)%>">
						<button>Орох</button>
				</a></td>
			</tr>
			<%
				}
			%>
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
	</script>
</body>
</html>