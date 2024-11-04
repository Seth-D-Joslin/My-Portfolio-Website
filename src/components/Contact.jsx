function Contact() {
  //   const [formData, setFormData] = useState({
  //     name: " ",
  //     email: " ",
  //     message: " ",
  //   });

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //     setFormData({ ...formData, [e.target.email]: e.target.value });
  //     setFormData({ ...formData, [e.target.message]: e.target.value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 id="page">Contact</h1>
      <form onSubmit={handleSubmit} id="form">
        <label>Name</label>
        <br />
        <input type="text" name="name" />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input type="text" email="email" />
        <br />
        <br />
        <label>Message</label>
        <br />
        <textarea type="text" message="message" rows="5" cols="30" />
      </form>
    </>
  );
}

export default Contact;

{
  /* <Form onSubmit={handleSubmit}>
  <Form.Label>Name</Form.Label>
  <Form.Controle
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</Form> */
}
