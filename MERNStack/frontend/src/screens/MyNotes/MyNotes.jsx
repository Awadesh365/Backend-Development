import React, { useEffect, useState } from "react";
import { MainScreen } from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("api/notes");

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Awadesh....">
      <Link to="createnote">
        <Button
          style={{ marginLeft: 10, marginRight: 6, display: "flex" }}
          size="lg"
        >
          create New Note
        </Button>
        {notes.map((note) => (
          <Card>
            <Card.Header>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button>
                  <Link to={`/note/${note._id}`}>Edit</Link>
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        ))}
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
