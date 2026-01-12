import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ce champ est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Ce champ est obligatoire";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Ce champ est obligatoire";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Ce champ est obligatoire";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Ce champ est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Formulaire envoyé :", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <section>
        <label></label>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">&#10060; {errors.name}</p>}
      </section>

      <section>
        <label></label>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">&#10060; {errors.email}</p>}
      </section>

      <section>
        <label></label>
        <input
            type="tel"
            name="phone"
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={handleChange}
        />
        {errors.phone && <p className="error">&#10060; {errors.phone}</p>}
      </section>


      <section>
        <label></label>
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="error">&#10060; {errors.subject}</p>}
      </section>

      <section>
        <label></label>
        <textarea
          name="message"
          placeholder="Votre message"
          rows={7}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">&#10060; {errors.message}</p>}
      </section>
      <section className="btn-move">
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </section>
    </form>
  );
}

export default ContactForm;
