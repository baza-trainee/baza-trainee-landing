export const projects = [
  {
    _id: '1',
    title: 'Murrfecto',
    imageUrl: '/img/projects/murrfecto.png',
    status: 'active',
    link: 'https://murrfecto.site',
    description: 'Сайт притулку для вуличних тварин Murrfecto',
    creationDate: 1682283600000,
    launchDate: 1686517200000,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: '2',
    title: 'Читозаврик',
    imageUrl: '/img/projects/zavr.png',
    status: 'under-development',
    link: ' ',
    description: 'Веб-додаток для дітей Читозаврик',
    creationDate: 1685566800000,
    launchDate: 1698267600000,
    complexity: 5,
    teamMembers: [],
  },
  {
    _id: '3',
    title: 'Читозаврик',
    imageUrl: '/img/projects/lapa.png',
    status: 'under-development',
    link: ' ',
    description: 'Сайт притулку для вуличних тварин Big Lapa',
    creationDate: 1685566800000,
    launchDate: 1691614800000,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: '4',
    title: 'Ataka Help',
    imageUrl: '/img/projects/atack.png',
    status: 'active',
    link: 'https://atakahelp.site',
    description: 'Платформа про види кібершахрайства Ataka Help',
    creationDate: 1683493200000,
    launchDate: 1687726800000,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: '5',
    title: '1001 songs',
    imageUrl: '/img/projects/1001songs.jpg',
    status: 'under-development',
    link: ' ',
    description: '1001 songs - сайт-колекція українських автентичних пісень ',
    creationDate: 1685566800000,
    launchDate: 1689195600000,
    complexity: 3,
    teamMembers: [],
  },
  {
    _id: '6',
    title: '450',
    imageUrl: '/img/projects/450.jpg',
    status: 'under-development',
    link: ' ',
    description:
      'Лендинг для допомоги постраждалим в Херсоні та області - 450 Kherson',
    creationDate: 1685566800000,
    launchDate: 1687381200000,
    complexity: 1,
    teamMembers: [],
  },
  {
    _id: '7',
    title: 'feeda',
    imageUrl: '/img/projects/feeda-1.png',
    status: 'under-development',
    link: ' ',
    description: 'Feeda - платформа для обробки заявок Baza Trainee',
    creationDate: 1687208400000,
    launchDate: 1691442000000,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: '8',
    title: 'book',
    imageUrl: '/img/projects/book.jpg',
    status: 'under-development',
    link: ' ',
    description: 'Книжка їде за кордон - портал гуманітарної допомоги',
    creationDate: 1688245200000,
    launchDate: 1690059600000,
    complexity: 2,
    teamMembers: [],
  },
  {
    _id: '9',
    title: 'book',
    imageUrl: '/img/projects/arms.jpg',
    status: 'under-development',
    link: ' ',
    description: 'Лендинг - збір коштів для 59-бригади “Сталеві Обійми”',
    creationDate: 1689368400000,
    launchDate: 1691787600000,
    complexity: 2,
    teamMembers: [],
  },
];

export type TProjects = typeof projects;

/*teamMembers: [
      {
        user: {
          _id: '6471fa06933513f26024a99',
          name: 'some name',
          link: 'https://www.linkedin.com/feed/',
        },
        role: {
          _id: '6471f9a29c17ac2190eb879',
          name: 'PM',
        },
      }, 
//formation-of-the-team
const inputDate = '15 липня 2023';
const weeks = 4;
const ukrainianMonths = [
  'січня',
  'лютого',
  'березня',
  'квітня',
  'травня',
  'червня',
  'липня',
  'серпня',
  'вересня',
  'жовтня',
  'листопада',
  'грудня',
];

// Function to convert the Ukrainian date string to milliseconds since Unix Epoch
const convertUkrainianDateToMilliseconds = (dateString: string) => {
  const dateParts = dateString.split(' ');
  const day = parseInt(dateParts[0], 10);
  const month = ukrainianMonths.indexOf(dateParts[1]);
  const year = parseInt(dateParts[2], 10);

  const dateObject = new Date(year, month, day);
  return dateObject.getTime();
};

// Convert the input date to milliseconds since Unix Epoch
const resultMilliseconds = convertUkrainianDateToMilliseconds(inputDate);

console.log(resultMilliseconds); // Output: 1671840000000

//const weeks = 21;
const weeksToMilliseconds = weeks * 7 * 24 * 60 * 60 * 1000;

// Add the milliseconds for 7 weeks to the current date
const futureDateMilliseconds = resultMilliseconds + weeksToMilliseconds;

console.log(futureDateMilliseconds);
*/
