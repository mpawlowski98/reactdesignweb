import React, { useState, useRef } from 'react';
import css from './Main.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../image/photo.jpg';
import { ReactComponent as Filmoteka } from '../image/filmoteka.svg';
import { ReactComponent as Sudoku } from '../image/sudoku.svg';
import { ReactComponent as PhoneBook } from '../image/phonebook.svg';
import { ReactComponent as Search } from '../image/search.svg';
import Slider from 'react-slick';

function Main() {
  const [isModalOpenContact, setIsModalOpenContact] = useState(false);
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
        </div>
        <Slider ref={slider} {...settings}>
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

          <div className={css.card}>
            <div className={css.info}>
              <Search />
              <h1>Image Finder</h1>
              <span>
                <p className={css.title}>[HTML, CSS, JS]</p>
                Aplikacja "Image Finder" to narzędzie umożliwiające użytkownikom
                znalezienie zdjęć związanych z określoną rzeczą lub tematem
                poprzez wykorzystanie interfejsu programistycznego API. Ta
                aplikacja jest przydatna dla osób, które poszukują ilustracji,
                zdjęć lub grafik na różne cele, takie jak projektowanie,
                badania, nauka czy po prostu ciekawość.
              </span>
              <a
                href="https://mpawlowski98.github.io/goit-react-hw-03-image-finder/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.gameLink2}
              >
                Click Me
              </a>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.info}>
              <Sudoku />
              <h1>XO</h1>
              <span>
                <p className={css.title}>[HTML, CSS, JS]</p>
                Aplikacja "Kółko i Krzyżyk" to wirtualna wersja klasycznej gry
                logicznej, znanej także jako Tic-Tac-Toe. Jest to prosta, a
                zarazem wciągająca gra, w której dwóch graczy rywalizuje ze sobą
                na planszy 3x3, próbując ułożyć trzy swoje symbole w rzędzie,
                kolumnie lub na przekątnej. Ta aplikacja zapewnia rozrywkę i
                zabawę, zarówno dla dzieci, jak i dla dorosłych.
              </span>
              <a
                href="https://mpawlowski98.github.io/Wheel-and-cross/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.gameLink2}
              >
                Click Me
              </a>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.info}>
              <Sudoku />
              <h1>CoinFlip</h1>
              <span>
                <p className={css.title}>[HTML, CSS, JS]</p>
                Aplikacja "Coin Flip - Heads czy Tails" to narzędzie
                umożliwiające użytkownikom losowe generowanie wyników rzutu
                monetą, czyli wyboru między "heads" i "tails". Ta prosta
                aplikacja zapewnia zarówno zabawę, jak i możliwość zapisywania
                wyników rzutów monetą dla celów rozrywki lub innych psotrzeb.
              </span>
              <a
                href="https://mpawlowski98.github.io/CoinFlip/"
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
              <Filmoteka />
              <h1>Movie</h1>
              <span>
                <p className={css.title}>[HTML, CSS, JS, React]</p>
                Aplikacja "Movie" to narzędzie, które umożliwia użytkownikom
                przeszukiwanie bazy filmów za pośrednictwem zintegrowanego API
                filmowego. Umożliwia to użytkownikom znalezienie filmów,
                przeczytanie ich opisów, zobaczenie listy aktorów oraz
                przeglądanie komentarzy i recenzji na ich temat. Aplikacja ta
                jest idealna dla miłośników kina, którzy chcą dowiedzieć się
                więcej o filmach i dzielić się swoimi opiniami.
              </span>
              <a
                href="https://mpawlowski98.github.io/movies/"
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
              <Search />
              <h1>Country information</h1>
              <span>
                <p className={css.title}>[HTML, CSS, JS]</p>
                Aplikacja "Country Information" to narzędzie, które umożliwia
                użytkownikom szybkie uzyskanie podstawowych informacji o
                wybranym państwie na całym świecie. Bez względu na to, czy
                jesteś zainteresowany podróżami, badaniami geograficznymi,
                kulturą czy po prostu chcesz poznać więcej o danym kraju, ta
                aplikacja jest dla ciebie.
              </span>
              <a
                href="https://mpawlowski98.github.io/Countries/"
                className={css.gameLink2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Me
              </a>
            </div>
          </div>
        </Slider>
      </section>

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
