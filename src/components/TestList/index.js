import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TestTitle from "../TestTitle";
import { TestContext } from "../../contexts/TestContext";
import { VscDebugStart } from "react-icons/vsc";
import { FiDelete } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function TestList() {
  const { tests } = useContext(TestContext);
  const { dispatch } = useContext(TestContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return tests.length ? (
    <div className="test-list py-2">
      <div className="container-fluid">
        <h2> Таны үүсгэсэн тестүүдийн жагсаалт </h2>
        <div className="bottom-line"></div>
        <div className="card " style={{ height: "1000px" }}>
          <ul>
            <li>
              {tests.map((test) => {
                return (
                  <div
                    className="grid-row-same"
                    style={{
                      margin: "2rem",
                      padding: "1.1rem",
                      border: "1px solid #c72727",
                      borderRadius: "15px",
                    }}
                  >
                    <div
                      className="item"
                      style={{ paddingLeft: "2rem", width: "300px" }}
                    >
                      <TestTitle test={test} key={test.id} />
                    </div>
                    <div className="item">
                      <Link>
                        <VscDebugStart
                          style={{
                            color: "#f99500",
                            fontSize: "2.5rem",
                            marginLeft: "15rem",
                          }}
                        />
                      </Link>
                      <Link to={`/test_edit/${test.id}`}>
                        <FiEdit2
                          style={{
                            color: "#009cff",
                            fontSize: "2rem",
                            margin: "0 3.5rem 0 3.5rem",
                          }}
                        />
                      </Link>
                      <FiDelete
                        onClick={handleClickOpen}
                        style={{ color: "#c72727", fontSize: "2rem" }}
                      />
                    </div>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        Та устгахдаа итгэлтэй байна уу?
                      </DialogTitle>

                      <DialogActions>
                        <Button
                          onClick={() =>
                            dispatch({ type: "DELETE_TEST", id: test.id })
                          }
                          color="primary"
                        >
                          Тийм
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                          Үгүй
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="test-list py-2">
      <div classNama="container" style={{ width: "1300px", margin: "0 auto" }}>
        <h2>Таны үүсгэсэн тестүүдийн жагсаалт</h2>
        <div className="bottom-line"></div>
        <div className="card empty" style={{ height: "600px" }}>
          <p style={{ margin: "3rem" }}>Та одоогоор тест үүсгээгүй байна.</p>
        </div>
      </div>
    </div>
  );
}
