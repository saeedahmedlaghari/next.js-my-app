import module from "./services-module/services.module.css";
const ServicesPage = () => {
  return (
    <span className={module.module}>
<h4>This is a our ServicesPage.</h4>
      <h2> Karachi Kitab Ghar Sindh </h2>        
      <h5> Murk Kitab Ghar karachi provides two type of service.</h5>
      <br/>
      
      <li> Online Services </li>
      <li> Offline Services </li>
      <br/>
      <h4>
        <strong> Online Services:</strong>
      </h4>
      <p className="special-first-line">
        In online services we get amount of book/books in advance with pakistan
        post charges and then we send out their product by Pakistan post.
        <br/>
      </p>

      <h4>
        <strong>Offline Services:</strong>
      </h4>

      <p>
        In Offline service we have kitab Ghar at Sabir Manizal Behind Gul Plaza
        Marstorn road Karachi, come here and choose your favorite book and give
        money in hand.
      </p>
    </span>
  );
};
export default ServicesPage;
