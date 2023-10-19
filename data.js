const abdul = { name: "Abdul Hannan", username: "hannanhunny01" };
const adne = { name: "Adne Moretti Moreira", username: "AdneMoretti" };
const andre = { name: "André Correa", username: "dartmol203" };
const heitor = { name: "Heitor Barbosa", username: "heitormsb" };
const joao = { name: "João Henrique Marques Calzavara", username: "joao-henrique10" };
const leonardo = { name: "Leonardo Vitoriano", username: "leonardomilv3" };
const lucas = { name: "Lucas Gabriel Sousa Camargo Paiva", username: "lucasgabriel-2" };
const marcos = { name: "Marcos Vinícius de Deus", username: "Marcos574" };
const puida = { name: "Guilherme Puida Moreira", username: "puida" };

const users = [
  abdul,
  adne,
  andre,
  heitor,
  joao,
  leonardo,
  lucas,
  marcos,
  puida,
];

const todo = "todo";
const doing = "doing";
const review = "review";
const done = "done";
const closed = "closed";

const issues = [
  { id: 87, package: "ruby-spy", authors: [joao], status: doing },
  { id: 85, package: "ruby-sys-filesystem", authors: [lucas], status: review },
  { id: 84, package: "ruby-xmlhash", authors: [abdul], status: doing },
  { id: 83, package: "ruby-solve", authors: [adne], status: doing },
  { id: 82, package: "ruby-unicode-plot", authors: [heitor], status: review },
  { id: 79, package: "jqp", authors: [puida], status: review },
  { id: 78, package: "labwc", authors: [puida], status: closed, comment: "Pacote novo. Fechado pois outra pessoa já estava empacotando." },
  { id: 74, package: "ruby-valid-email", authors: [leonardo], status: review },
  { id: 72, package: "ruby-blade", authors: [lucas], status: done },
  { id: 70, package: "ruby-vmstat", authors: [puida], status: done },
  { id: 69, package: "python-redmine", authors: [andre], status: done },
  { id: 67, package: "python3-colored", authors: [adne], status: review },
  { id: 66, package: "python-flask-seeder", authors: [heitor], status: review },
  { id: 65, package: "python-flaky", authors: [andre], status: review },
  { id: 63, package: "dnlib", authors: [joao, marcos], status: review },
  { id: 62, package: "flask-dance", authors: [puida, lucas], status: done },
];

export {
  users,
  issues,
}
