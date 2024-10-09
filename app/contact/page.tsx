import design from "./contact/color.module.css";

function ContactPage() {
  const Contact: string = "021-32662494 03003429326";
  return (
    <div className={design.color}>
      <h3>
        {" "}
        <u> Karachi Kitab Ghar Karachi </u>{" "}
      </h3>
      <h4> This is our Contact page.</h4>
      <h6>If you have any kind of problem so contact us.</h6>
      <h6> Contact: {Contact} </h6>
    </div>
  );
}
export default ContactPage;
