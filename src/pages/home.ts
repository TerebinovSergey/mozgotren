import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';
import { SessionData } from '../types/types';

export default class HomePage {
  static draw(status: SessionData): void {
    const header = new HeaderView();
    header.draw(status);
    HomePage.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `
    <div class="body-background-shaddow" onclick="document.querySelector('.nav-aside')?.classList.toggle('active'); 
document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
document.querySelector('.open')?.classList.toggle('hidden1');
document.querySelector('.close')?.classList.toggle('hidden1');
"></div>
    <section class="main-header main-background">
    <div class="container">
    <h1 class="main-header-title">
    <span class="underline"></span>
    <div class="title-link title-main">
      <span>M</span>
      <span>O</span>
      <span>Z</span>
      <span>G</span>
      <span>O</span>
      <span>T</span>
      <span>R</span>
      <span>E</span>
      <span>N</span>
    </div>
    <span class="underline"></span>
    </h1>
      <p class="main-header-trenagors paragraph">
        Тренажеры для мозга.<br />Тренировка памяти,<br />внимания и
        мышления.
      </p>
      <p class="main-header-brain paragraph">
        ЗАСТАВЬ СВОЙ МОЗГ РАБОТАТЬ БЫСТРЕЕ!
      </p>
      <a class="train-brain" href="/trenagors">Тренировать мозг</a>
    </div>
  </section>
  <div class="container">
    <div id="about-us"></div>
    <section class="about-us">
      <div class="main-container">
        <div class="title-wrapper">
          <h2 class="sub-title">Развитие мозга</h2>
          <img class="under-img" src="./assets/line-break-blue.svg" alt="" />
        </div>
        <p class="about-us-description paragraph">
          С помощью наших тренажеров для ума вы легко сможете улучшить ваши
          умственные способности качество работы мозга в разных
          направлениях.
        </p>
        <div class="about-us-categories">
          <div class="category category__memory">
            <div class="category-item__point">
              <img
                class="category-item__img"
                src="./assets/diskette.svg"
                alt="memory"
              />
            </div>

            <h3 class="category-item__title">Память</h3>
            <p class="category-item__paragraph paragraph">
              Тренировка памяти это одно из важнейших задач для мозга. Имея
              хорошую память вы с легкостью и за короткое время сможете
              осваивать любые навыки и даже профессию.
            </p>
          </div>
          <div class="category category__attention">
            <div class="category-item__point">
              <img
                class="category-item__img"
                src="./assets/loupe.svg"
                alt="memory"
              />
            </div>
            <h3 class="category-item__title">Внимание</h3>
            <p class="category-item__paragraph paragraph">
              Научившись концентрировать внимание вы сможете эффективно,
              безошибочно и с большой скоростью выполнять любые сложные
              задачи.
            </p>
          </div>
          <div class="category category__thinking">
            <div class="category-item__point">
              <img
                class="category-item__img"
                src="./assets/thinking.svg"
                alt="memory"
              />
            </div>
            <h3 class="category-item__title">Мышление</h3>
            <p class="category-item__paragraph paragraph">
              Тренажеры для развития мышления ускорят работу мозга и его
              вычеслитетельные способности. Научитесь в уме быстро выполнять
              сложные арифметические операции.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="features"></div>
  <section class="benefits-trenagors">
    <div class="container">
    <div class="main-container">
      <div class="title-wrapper">
        <h2 class="sub-title sub-title__white benefits__sub-title">ПРЕИМУЩЕСТВА ТРЕНАЖЕРОВ</h2>
        <img class="under-img" src="./assets/line-break-white.svg" alt="" />
      </div>
      <div class="benefits-wrapper">
        <div class="benefits-item">
          <div class="benefits-description">
            <h3 class="benefits-title">Доступны онлайн</h3>
            <p class="benefits-paragraph paragraph">
              Не нужно скачивать и устанавливать дополнительных приложений.
              Тренажеры доступны с любого устройства.
            </p>
          </div>
          <div class="benefits-img-container">
            <i class="fa fa-globe fa-white" aria-hidden="true"></i>
          </div>
        </div>
        <div class="benefits-item">
          <div class="benefits-description">
            <h3 class="benefits-title">Гибки в использовании</h3>
            <p class="benefits-paragraph paragraph">
              Вы сами решаете когда вам нужно заниматься и на каких именно
              онлайн тренажерах для развития ума.
            </p>
          </div>
          <div class="benefits-img-container">
            <i class="fa fa-random fa-white" aria-hidden="true"></i>
          </div>
        </div>
        <div class="benefits-item">
          <div class="benefits-description">
            <h3 class="benefits-title">Экономят время</h3>
            <p class="benefits-paragraph paragraph">
              Для тренировки мозга не нужно много времени. Достаточно 10-20
              минут каждый день в любое доступное для вас время.
            </p>
          </div>
          <div class="benefits-img-container">
            <i class="fa fa-clock-o fa-white" aria-hidden="true"></i>
          </div>
        </div>
        <div class="benefits-item">
          <div class="benefits-description">
            <h3 class="benefits-title">Видны результаты</h3>
            <p class="benefits-paragraph paragraph">
              Все результаты тренировок фиксируются и вы сможете легко
              отслеживать свои достижения.
            </p>
          </div>
          <div class="benefits-img-container">
            <i class="fa fa-line-chart fa-white" aria-hidden="true"></i>
          </div>
        </div>
        <div class="benefits-item">
          <div class="benefits-description">
            <h3 class="benefits-title">Просты в использовании</h3>
            <p class="benefits-paragraph paragraph">
              Все тренажеры очень просты в использовании. Вы сможете начать
              тренироваться мгновенно.
            </p>
          </div>
          <div class="benefits-img-container">
            <i class="fa fa-check fa-white" aria-hidden="true"></i>
          </div>
        </div>
        <div class="benefits-item">
          <div class="benefits-description">
            <h3 class="benefits-title">Можно бесплатно</h3>
            <p class="benefits-paragraph paragraph">
              Можно выполнять упражнения для тренировки мозга совершенно
              бесплатно. Только с некоторыми ограничениями.
            </p>
          </div>
          <div class="benefits-img-container">
            <i class="fa fa-gift fa-white" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <div class="container">
    <section class="trenagors-for-brain">
      <div class="main-container">
        <div class="title-wrapper">
          <h2 class="sub-title">ТРЕНАЖЕРЫ ДЛЯ МОЗГА</h2>
          <img class="under-img" src="./assets/line-break-blue.svg" alt="" />
        </div>
        <blockquote>
          Путь к самосовершенствованию совсем не сложный и начинается с
          упорных и систематических занятий над собой. Ежедневные тренировки
          памяти, внимания и мышления помогут расширить ваш потенциал уже
          через две недели, и это только начало. Ключевое условие успеха –
          постоянство, которое способно компенсировать утраченные ранее
          возможности развития и в любом возрасте позволит добиться
          качественного результата без титанических усилий. Широкий выбор
          тренажеров для ума, позволяет подобрать упражнения, максимально
          интересные вам, а также все задания автоматически подстраиваются
          под ваш текущий уровень способностей и уже после первых действий
          задают необходимую нагрузку в данный период.
        </blockquote>
        <div class="improve-memory section-improve">
          <div class="improve-description">
            <h3 class="improve-description__title">
              Прокачайте свою память
            </h3>
            <p class="improve-description__paragraph paragraph">
              Специально разработанные психологами тренажеры для развития
              памяти позволяют научиться сохранять в голове не только
              множество новой информации, но и дают практические навыки по
              ее структурированию, определению прядка, преобразованию в
              образы и длительному хранению.
            </p>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Учитесь запоминать списки
                </h4>
                <p class="info-description__paragraph paragraph">
                  Длинные цепочки несвязанных между собой слов станут для
                  вас легко запоминаемы, и за покупками в магазин вы уже не
                  будете брать с собой список, все и так будет в памяти.
                </p>
              </div>
            </div>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Телефонный справочник в голове
                </h4>
                <p class="info-description__paragraph paragraph">
                  А как на счет большого объема цифр? Занимайтесь развитием
                  памяти регулярно и все важные номера, пароли и реквизиты
                  платежных карт просто поселяться на постоянное место
                  жительства в вашей голове.
                </p>
              </div>
            </div>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-blind" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Никакой забывчивости в старости
                </h4>
                <p class="info-description__paragraph paragraph">
                  Давно доказано врачами, что умственные занятия и изучение
                  новых умений, значительно снижают риск развития
                  заболеваний головного мозга в пожилом возрасте. Тренируйте
                  свой мозг и встречайте старость с радостью и ясным умом.
                </p>
              </div>
            </div>
          </div>
          <div class="improve-wpapper-img">
            <img
              class="improve__img"
              src="./assets/improve-memory.png"
              alt="improve memory"
            />
          </div>
        </div>

        <div class="improve-attention section-improve">
          <div class="improve-wpapper-img">
            <img
              class="improve__img"
              src="./assets/attention.png"
              alt="improve memory"
            />
          </div>
          <div class="improve-description">
            <h3 class="improve-description__title">
              Владейте своим вниманием
            </h3>
            <p class="improve-description__paragraph paragraph">
              Тренажеры для работы с вниманием и концентрацией направленны
              на обретение способностей более продуктивно работать с
              получаемой информацией и позволяют научиться реагировать
              только на важные вещи, а все, что не несет ценности для вас,
              игнорировать.
            </p>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Научитесь видеть больше
                </h4>
                <p class="info-description__paragraph paragraph">
                  Постоянные тренировки, помогают научиться замечать больше
                  деталей и мелких вещей, на которые ранее просто не хватало
                  внимания.
                </p>
              </div>
            </div>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Держите в фокусе только главное
                </h4>
                <p class="info-description__paragraph paragraph">
                  При постоянном неудержимом потоке информации с различных
                  систем-анализаторов организма, наш мозг учится определять
                  что из этого важно, помогите ему это делать лучше и
                  быстрее.
                </p>
              </div>
            </div>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Станьте образцом в работе
                </h4>
                <p class="info-description__paragraph paragraph">
                  Высокая степень внимания, ведет к повышению эффективности
                  выполняемой работы и снижению количества допущенных
                  ошибок.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="improve-your-thinking section-improve">
          <div class="improve-description">
            <h3 class="improve-description__title">
              Расширьте границы мышления
            </h3>
            <p class="improve-description__paragraph paragraph">
              Не стоит мыслить сложившимися стереотипами, для стабильного
              роста личности, будьте открыты к новым взглядам и умственным
              приемам. Тренажеры для мышления заставляют взглянуть на
              знакомые вам вещи по другому и поискать нестандартное решение.
            </p>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-map-signs" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Находите выход легко
                </h4>
                <p class="info-description__paragraph paragraph">
                  Качественное развитие креативного мышления, позволяет
                  быстро и эффективно находить выход из любой сложившейся
                  ситуации, для такого работника нет неразрешимых задач, а с
                  проектами он справляется легко и неординарно.
                </p>
              </div>
            </div>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-trophy" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Пробудите свои таланты
                </h4>
                <p class="info-description__paragraph paragraph">
                  Творческие способности есть у каждого человека с рождения,
                  однако их можно как развивать, так и угашать. Уникальные
                  занятия на развитие творчества – ценный вклад в развитие
                  личности.
                </p>
              </div>
            </div>
            <div class="improve-description__info">
              <div class="info__img">
                <i class="fa fa-street-view" aria-hidden="true"></i>
              </div>
              <div class="info-description">
                <h4 class="info-description__title">
                  Научитесь абстрагироваться
                </h4>
                <p class="info-description__paragraph paragraph">
                  Умение оперировать абстрактными понятиями, позволяет
                  размышлять о вещах и понятиях не известных вам до этого
                  момента. Такой навык полезен , когда перед вами не
                  стандартная ситуация.
                </p>
              </div>
            </div>
          </div>
          <div class="improve-wpapper-img">
            <img
              class="improve__img"
              src="./assets/thinking.png"
              alt="improve memory"
            />
          </div>
        </div>
      </div>
    </section>
  </div>`;
  }
}
