import React, { useState } from 'react';
import css from './Main.module.css';
import photo from '../image/photo.jpg';
import { ReactComponent as Filmoteka } from '../image/filmoteka.svg';
import { ReactComponent as Sudoku } from '../image/sudoku.svg';
import { ReactComponent as PhoneBook } from '../image/phonebook.svg';
function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenContact, setIsModalOpenContact] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalContact = () => {
    setIsModalOpenContact(true);
  };

  const closeModalContact = () => {
    setIsModalOpenContact(false);
  };

  return (
    <div id="about">
      <section id={css.about}>
        <div className={css.header}>
          <h1>About Me</h1>
          <button
            className={`${css.gameLink2} ${css.btnanimation}`}
            id={css.hireme}
            onClick={openModalContact}
          >
            Hire Me
          </button>
        </div>
        <div className={css.card}>
          <img src={photo} alt="zdjęcie z CV" />
          <div className={css.info}>
            <h1>Cześć, jestem Michał</h1>
            <p>
              Uczę się programować od ponad roku i z dnia na dzień rozwijam
              swoje umiejętności. Programowanie stało się moją pasją, a każdy
              nowy dzień to okazja do nauki czegoś nowego. Moje główne obszary
              zainteresowań to front-end web development oraz tworzenie połączeń
              między front-endem a backendem. Jestem zmotywowany, aby stać się
              ekspertem w dziedzinie programowania i tworzyć innowacyjne
              rozwiązania. Oprócz kodowania, interesuj się sportem, e-sportem co
              dodaje kreatywności i różnorodności do mojego życia. Chciałbym Cię
              zachęcić do przeglądania moich projektów i dołączenia do mnie w
              podróży przez świat programowania.
            </p>
          </div>
        </div>
      </section>

      <section id={css.features}>
        <div className={css.header}>
          <h1>Projects</h1>
          <button
            className={`${css.gameLink2} ${css.btnanimation}`}
            id={css.myCard}
            onClick={openModal}
          >
            See More
          </button>
        </div>
        <div className={css.featurescards}>
          <div className={css.card}>
            <div className={css.info}>
              <Filmoteka />

              <h1>Filmoteka</h1>
              <span>
                <p className={css.title}>[HTML, CSS, SASS, JS]</p>
                Strona "Filmoteka" umożliwia użytkownikom wyszukiwanie filmów za
                pomocą tytułu, po kliknięciu na film w wynikach wyszukiwania
                użytkownicy mogą zobaczyć pełne informacje o filmie. Znajdują
                się tutaj m.in. opis fabuły, gatunek, popularność i ocena
                użytkowników.Użytkownicy mogą dodawać filmy do dwóch głównych
                kolekcji: "Watched" (obejrzane) i "Queue" (do obejrzenia).
                Dzięki temu mogą śledzić, które filmy już obejrzeli, a które
                chcieliby zobaczyć w przyszłości.
              </span>
              <a
                href="https://bieganskip.github.io/team-sztywniutko/"
                className={css.gameLink2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Me
              </a>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.info}>
              <Sudoku />
              <h1>Sudoku</h1>
              <span>
                <p className={css.title}>[HTML, CSS, JS]</p>
                Gra Sudoku umożliwia wybór poziomu trudności, taki jak "Easy"
                (łatwe), "Medium" (średnie) i "Hard" (trudne). Każdy poziom
                trudności różni się ilością i umiejscowieniem początkowych liczb
                na planszy.Plansza jest generowana losowo, przy zachowaniu zasad
                Sudoku, tak aby była wykonalna, ale niezbyt łatwa.Gracz może
                używać myszki lub klawiatury do wypełniania pustych komórek
                liczbami od 1 do 9. System automatycznie sprawdza, czy
                wypełniona liczba nie narusza zasad Sudoku.
              </span>
              <a
                href="https://mpawlowski98.github.io/Sudoku/"
                className={css.gameLink2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Me
              </a>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.info}>
              <PhoneBook />
              <h1>PhoneBook</h1>
              <span>
                <p className={css.title}>[HTML, CSS, MUI, React, Node]</p>
                Aplikacja umożliwia użytkownikom rejestrację konta za pomocą
                swojego adresu e-mail i hasła. Po rejestracji użytkownicy mogą
                logować się do swojego konta, co pozwala na dostęp do ich
                spersonalizowanej książki telefonicznej.Użytkownicy mogą łatwo
                dodawać nowe kontakty, klikając przycisk "Dodaj
                Kontakt".Aplikacja umożliwia użytkownikom łatwe wyszukiwanie
                kontaktów za pomocą pola wyszukiwania.Aplikacja umożliwia
                użytkownikom wyszukiwanie kontaktów.
              </span>
              <a
                href="https://mpawlowski98.github.io/phonebook/"
                className={css.gameLink2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Me
              </a>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'modalshow' : ''}`}>
          <div id="myModal" className={css.modal}>
            <div className={css.modalcontent}>
              <span className={css.close} onClick={closeModal}>
                X
              </span>
              <div className={css.modalcontainer}>
                <a
                  href="https://mpawlowski98.github.io/movies/"
                  className={css.gameLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Movie [HTML, CSS, JS, React]
                </a>
                <a
                  href="https://mpawlowski98.github.io/CoinFlip/"
                  className={css.gameLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoinFlip [HTML, CSS, JS]
                </a>
                <a
                  href="https://mpawlowski98.github.io/Wheel-and-cross/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.gameLink}
                >
                  XO [HTML, CSS, JS]
                </a>
                <a
                  href="https://mpawlowski98.github.io/goit-react-hw-03-image-finder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.gameLink}
                >
                  Image Finder [HTML, CSS, JS]
                </a>
                <a
                  href="https://mpawlowski98.github.io/Countries/"
                  className={css.gameLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Country information [HTML, CSS, JS]
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpenContact && (
        <div className={`modalcontact ${isModalOpenContact ? 'show' : ''}`}>
          <div id="myModalcontact" className={css.modalcontact}>
            <span className={css.closemodal} onClick={closeModalContact}>
              X
            </span>
            <div className={css.modalcontactcontainer}>
              <p className={css.contacttitle}>Contact:</p>
              <a
                href="mailto: mpawlowski98@interia.pl"
                className={css.gameLink3}
              >
                Napisz do mnie
              </a>
              <a
                href="https://www.linkedin.com/in/micha%C5%82-piotr-paw%C5%82owski/"
                className={css.gameLink3}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;
