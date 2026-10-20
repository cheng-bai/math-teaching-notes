// Public copy only. Never put student records, credentials or raw memories here.
const headline = { before: '把数学', highlight: '讲清楚', after: '把材料做扎实' };

export const site = {
  name: '数学工作札记',
  englishName: 'MATHEMATICS / TEACHING NOTES',
  headline,
  title: `${headline.before}${headline.highlight}，${headline.after}。`,
  description: '围绕上海高中数学，记录方法讲解、教学材料与工具实践。让解题的关键转折看得见，让每一份材料有据可查、真正可用。',
  intro: '这里关心的，不只是一道题的答案。更是为什么想到这一步，怎样让学生读懂，以及一份材料如何在下一堂课继续发挥作用。',
  edition: '公开试运行 · 01',
  updated: '2026-10-20',
  about: '这个空间以高中数学教学与教研为中心，把题目研究、讲义制作、课堂反馈和轻量工具放到同一条工作线上。技术不是目的，帮助理解与支持下一步教学才是。',
  editorialNote: '本站初稿由 AI 依据既往协作中的教学主题与工作偏好整理，属于待本人校订的公开介绍，不是经认证的个人履历。未公开姓名、任职、学生资料及联系方式。',
};

export const principles = [
  { number: '01', title: '先理解，再推导', text: '完整保留条件与目标，解释关键方法为什么值得尝试，再给出能独立成立的推导。' },
  { number: '02', title: '结论要有依据', text: '区分原始材料、作者观点与自己的判断。结构检查通过，不等于数学已经复核。' },
  { number: '03', title: '材料服务课堂', text: '学生版留给思考，教师版保留解法与教学备注。留白、题图和公式都要在实际阅读中检验。' },
];

export const practices = [
  { category: '材料', title: '从一道题，到一份可用的讲义', text: '核对原题与来源，按共同方法组织题目，保留有效推导，再分别制作学生版与教师版。', output: '关注：完整题干 / 方法梯度 / 双版隔离', number: '01' },
  { category: '教研', title: '从一张试卷，读出教学的下一步', text: '不只比较难度数字，更关注代表题的关键转折、跨卷变化，以及它们对备课与训练的意义。', output: '关注：代表题 / 判断依据 / 备课行动', number: '02' },
  { category: '工具', title: '让抽象关系，变成可以操作的图景', text: '用轻量网页呈现函数、几何与方法。交互帮助发现关系，但不能替代必要的数学证明。', output: '关注：直观探索 / 参数变化 / 证明衔接', number: '03' },
  { category: '教学', title: '把反馈，带回下一堂课', text: '从真实作答与课堂表现定位卡点，明确下一次要复测什么。不把教学预判当成学生已经发生的错误。', output: '关注：学生证据 / 针对练习 / 复测安排', number: '04' },
];

export const workflow = [
  { title: '回到来源', text: '原题、题图、条件与出处，先核对完整。' },
  { title: '复核数学', text: '检查方法、分类边界、等号与结论。' },
  { title: '组织材料', text: '按教学用途安排层次、版本与留白。' },
  { title: '回到课堂', text: '实际使用，再根据证据调整与复测。' },
];
