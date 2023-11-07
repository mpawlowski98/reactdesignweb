import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import css from './Main.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../image/photo.jpg';
import { ReactComponent as Filmoteka } from '../image/filmoteka.svg';
import { ReactComponent as Sudoku } from '../image/sudoku.svg';
import { ReactComponent as PhoneBook } from '../image/phonebook.svg';
import { ReactComponent as Search } from '../image/search.svg';

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
    centerMode: true,
    centerPadding: '25px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
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

  const projects = [
    {
      id: 1,
      title: 'Sudoku',
      titleDescription: '[HTML, CSS, JS]',
      description:
        'Gra Sudoku umożliwia wybór poziomu trudności, taki jak Eas (łatwe), Medium (średnie) i Hard (trudne). Każdy poziom trudności różni się ilością i umiejscowieniem początkowych liczb na planszy.Plansza jest generowana losowo, przy zachowaniu zasad Sudoku, tak aby była wykonalna, ale niezbyt łatwa.Gracz może używać myszki lub klawiatury do wypełniania pustych komórek liczbami od 1 do 9. System automatycznie sprawdza, czy wypełniona liczba nie narusza zasad Sudoku.',
      link: 'https://mpawlowski98.github.io/Sudoku/',
      image: Sudoku,
    },
    {
      id: 2,
      title: 'Filmoteka',
      titleDescription: '[HTML, CSS, SASS, JS]',
      description:
        'Strona "Filmoteka" umożliwia użytkownikom wyszukiwanie filmów za pomocą tytułu, po kliknięciu na film w wynikach wyszukiwania użytkownicy mogą zobaczyć pełne informacje o filmie. Znajdują się tutaj m.in. opis fabuły, gatunek, popularność i ocena użytkowników.Użytkownicy mogą dodawać filmy do dwóch głównych kolekcji: "Watched" (obejrzane) i "Queue" (do obejrzenia). Dzięki temu mogą śledzić, które filmy już obejrzeli, a które chcieliby zobaczyć w przyszłości.',
      link: 'https://bieganskip.github.io/team-sztywniutko/',
      image: Filmoteka,
    },
    {
      id: 3,
      title: 'PhoneBook',
      titleDescription: '[HTML, CSS, MUI, React, Node]',
      description:
        'Aplikacja umożliwia użytkownikom rejestrację konta za pomocą swojego adresu e-mail i hasła. Po rejestracji użytkownicy mogą logować się do swojego konta, co pozwala na dostęp do ich spersonalizowanej książki telefonicznej.Użytkownicy mogą łatwo dodawać nowe kontakty, klikając przycisk "Dodaj Kontakt".Aplikacja umożliwia użytkownikom łatwe wyszukiwanie kontaktów za pomocą pola wyszukiwania.Aplikacja umożliwia użytkownikom wyszukiwanie kontaktów.',
      link: 'https://mpawlowski98.github.io/phonebook/',
      image: PhoneBook,
    },
    {
      id: 4,
      title: 'Image Finder',
      titleDescription: '[HTML, CSS, JS]',
      description:
        'Aplikacja "Image Finder" to narzędzie umożliwiające użytkownikom znalezienie zdjęć związanych z określoną rzeczą lub tematem poprzez wykorzystanie interfejsu programistycznego API. Ta aplikacja jest przydatna dla osób, które poszukują ilustracji, zdjęć lub grafik na różne cele, takie jak projektowanie, badania, nauka czy po prostu ciekawość.',
      link: 'https://mpawlowski98.github.io/goit-react-hw-03-image-finder/',
      image: Search,
    },
    {
      id: 5,
      title: 'XO',
      titleDescription: '[HTML, CSS, JS]',
      description:
        'Aplikacja "Kółko i Krzyżyk" to wirtualna wersja klasycznej gry logicznej, znanej także jako Tic-Tac-Toe. Jest to prosta, a zarazem wciągająca gra, w której dwóch graczy rywalizuje ze sobą na planszy 3x3, próbując ułożyć trzy swoje symbole w rzędzie, kolumnie lub na przekątnej. Ta aplikacja zapewnia rozrywkę i zabawę, zarówno dla dzieci, jak i dla dorosłych.',
      link: 'https://mpawlowski98.github.io/Wheel-and-cross/',
      image: Sudoku,
    },
    {
      id: 6,
      title: 'CoinFlip',
      titleDescription: '[HTML, CSS, JS]',
      description:
        'Aplikacja "Coin Flip - Heads czy Tails" to narzędzie umożliwiające użytkownikom losowe generowanie wyników rzutu monetą, czyli wyboru między "heads" i "tails". Ta prosta aplikacja zapewnia zarówno zabawę, jak i możliwość zapisywania wyników rzutów monetą dla celów rozrywki lub innych psotrzeb.',
      link: 'https://mpawlowski98.github.io/CoinFlip/',
      image: Sudoku,
    },
    {
      id: 7,
      title: 'Movie',
      titleDescription: '[HTML, CSS, JS, React]',
      description:
        ' Aplikacja "Movie" to narzędzie, które umożliwia użytkownikom przeszukiwanie bazy filmów za pośrednictwem zintegrowanego API filmowego. Umożliwia to użytkownikom znalezienie filmów, przeczytanie ich opisów, zobaczenie listy aktorów oraz przeglądanie komentarzy i recenzji na ich temat. Aplikacja ta jest idealna dla miłośników kina, którzy chcą dowiedzieć się więcej o filmach i dzielić się swoimi opiniami.',
      link: 'https://mpawlowski98.github.io/movies/',
      image: Filmoteka,
    },
    {
      id: 8,
      title: 'Country information',
      titleDescription: '[HTML, CSS, JS]',
      description:
        'Aplikacja "Country Information" to narzędzie, które umożliwia użytkownikom szybkie uzyskanie podstawowych informacji o wybranym państwie na całym świecie. Bez względu na to, czy jesteś zainteresowany podróżami, badaniami geograficznymi, kulturą czy po prostu chcesz poznać więcej o danym kraju, ta aplikacja jest dla ciebie.',
      link: 'https://mpawlowski98.github.io/Countries/',
      image: Search,
    },
  ];

  const projectsPerSlide = 8;
  const [currentSlide, setCurrentSlide] = useState(0);

  const displayProjects = projects.slice(
    currentSlide * projectsPerSlide,
    (currentSlide + 1) * projectsPerSlide
  );

  return (
    <div id="about">
      <section id={css.about}>
        <div className={css.header}>
          <h2>About Me</h2>
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
            <h2>Cześć, jestem Michał</h2>
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
          <h2>Projects</h2>
        </div>

        <Slider ref={slider} {...settings}>
          {displayProjects.map(project => (
            <div key={project.id} className={css.card}>
              <div className={css.info}>
                {project.image && <project.image />}
                <h2>{project.title}</h2>
                <span>
                  <p className={css.title}>{project.titleDescription}</p>
                  {project.description}
                </span>
                <a
                  href={project.link}
                  className={css.gameLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Me
                </a>
              </div>
            </div>
          ))}
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
