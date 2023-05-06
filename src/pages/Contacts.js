const Contacts = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Almaty, Kazakhstan</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+77716486904">+7 (771) 648-69-04</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:aishabibim@gallery.com">aishabibim@gallery.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
