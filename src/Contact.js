import React, { useEffect, useState } from "react";
import "./Contact.css";
//import useForm from "./useForm";

import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import validateQueryForm from "./validate.queryForm";

function Contact() {
  const [errorStatus, setErrorStatus] = useState(null);
  const [loader, setLoader] = useState(false);
  const [returnStatus, setReturnStatus] = useState([]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateQueryForm(values));
  };

  const submit = () => {
    setLoader(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("http://localhost:3030/email/sent", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("res", result);
          if (result.status) {
            setReturnStatus(result.status);
            setLoader(false);

            setValues({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            setErrorStatus(null);
          } else {
            setErrorStatus("Somthing went wrong");
            setLoader(false);
            setReturnStatus(false);
          }
        },
        (errors) => {
          setErrorStatus("Somthing went wrong");
          setLoader(false);
          setReturnStatus(false);
        }
      );
  };
  console.log(errorStatus);
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      submit();
      //console.log(values);
    }
  }, [errors]);

  //   const { values, errors, handleChange, handleSubmit } = useForm(
  //     submit,
  //     validateQueryForm
  //   );

  return (
    <div className="contact" id="contact">
      <div className="contact__maxWidth">
        <h2 className="contact__title">Contact us</h2>
        <div className="contact__content">
          <div className="contact__columnLeft">
            <div className="contact__columnLeftText">Get in Touch</div>
            <p>
              This whole website created by me so tell me how is my work? and if
              you have any query or suggestion feel free to contact me ?
            </p>
            <div className="contact__contactInfo">
              <div className="contact__row">
                <PersonIcon className="contact__contactInfoIcon" />
                <div className="contact__info">
                  <div className="contact__head">Name</div>
                  <div className="contact__subTitle">Ajaj Ahmad</div>
                </div>
              </div>
              <div className="contact__row">
                <LocationOnIcon className="contact__contactInfoIcon" />
                <div className="contact__info">
                  <div className="contact__head">Address</div>
                  <div className="contact__subTitle">
                    E-208 FF Sector-22, Noida
                  </div>
                </div>
              </div>
              <div className="contact__row">
                <EmailIcon className="contact__contactInfoIcon" />
                <div className="contact__info">
                  <div className="contact__head">Email</div>
                  <div className="contact__subTitle">aijaz.fkp@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__columnRight">
            <div className="contact__columnRightText">Message me</div>
            <form>
              <div className="contact__columnRightFields">
                <div className="contact__columnRightField name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required=""
                    value={values.name}
                    onChange={handleChange}
                    className={errors.name && "inputError"}
                  />
                  {errors.name && (
                    <p className="contact__columnRightField--error">
                      *{errors.name}
                    </p>
                  )}
                </div>
                <div className="contact__columnRightField email">
                  <input
                    type="email"
                    placeholder="Email"
                    required=""
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={errors.email && "inputError"}
                  />
                  {errors.email && (
                    <p className="contact__columnRightField--error">
                      *{errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact__columnRightField subject">
                <input
                  type="text"
                  placeholder="Subject"
                  required=""
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  className={errors.subject && "inputError"}
                />
                {errors.subject && (
                  <p className="contact__columnRightField--error">
                    *{errors.subject}
                  </p>
                )}
              </div>
              <div className="contact__columnRightField textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  required=""
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className={errors.message && "inputError"}
                ></textarea>
                {errors.message && (
                  <p className="contact__columnRightField--error">
                    *{errors.message}
                  </p>
                )}
              </div>
              <div className="contact__columnRightButton">
                <button type="submit" onClick={handleSubmit}>
                  Send message
                </button>
                {loader ? "Loading..." : ""}
                {errorStatus && <p>{errorStatus}</p>}
                <p>
                  {returnStatus === true
                    ? "Email has been sent successfully!!!"
                    : ""}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
