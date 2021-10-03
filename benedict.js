const benedict = ['Бандерлог','Бенедикт','Беннихилл','Бергамот','Баралгин','Бандикут','Бенефис','Беломор','Бандероль','Будапешт','Барбарис','Баклажан','Бабблгам','Бекмамбет','Бартикрауч','Бамблби','Бадминтон','Барабас','Букингем','Баттлфилд','Боромир','Бугимен','Бубенец','Буерак','Бафомет','Базилик','Бенадрил','Бубалех','Бургеркинг','Бранденбург']
const cumberbatch = ['Кукумбер', 'Казантип', 'Джонникэш', 'Киберскотч', 'Купидон', 'Карабас', 'Конфьюжен', 'Кёнигсберг', 'Достаньмеч', 'Корвалол', 'Курувпечь', 'Камбербэтч', 'Камамбер', 'Вваннойтечь', 'Кулумбек', 'Кандибобер', 'Когтевран', 'Коленвал', 'Контерстрайк', 'Трахтенберг', 'Хасавюрт', 'Чеддерчиз', 'Драмнбейс', 'Данкешон', 'Кабачок', 'Комбикорм', 'Минигольф', 'Кайзершнаутц', 'Канифоль', 'Курткобейн']

const letters = 'абвгдеёжзийклмнопрстуфхцчшщэюя'.split('')

if (process.argv.length === 4) {
  // Specify your name and surname to generate
  // your personal name variant (https://i.imgur.com/jTlLd5c.png)
  const first = letters.indexOf(process.argv[2].charAt(0).toLowerCase())
  const second = letters.indexOf(process.argv[3].charAt(0).toLowerCase())

  if (first === -1 || second === -1) return console.log('¯\_(ツ)_/¯')

  console.log('Твоё Кэмбербэтч-имя:')
  console.log(benedict[first], cumberbatch[second])
} else {
  // Generate random name variant
  const benedictRandom = benedict[Math.floor(Math.random() * benedict.length)]
  const cumberbatchRandom = cumberbatch[Math.floor(Math.random() * cumberbatch.length)]

  console.log(benedictRandom, cumberbatchRandom)
}
