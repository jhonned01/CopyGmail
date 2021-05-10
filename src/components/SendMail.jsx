import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/counter/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      menssage: data.menssage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>Nuevos Mensajes</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To es requerido!</p>}

        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject es requerido!</p>
        )}

        <input
          type="text"
          placeholder="Mensaje..."
          className="sendMail__message"
          {...register("menssage", { required: true })}
        />
        {errors.menssage && (
          <p className="sendMail__error">Menssage es requerido!</p>
        )}
        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
