import Base from "../base/Base";

class List extends Base {
  execute() {
    const data = localStorage.getItem("writerReportApp");

    // Verifica se há dados no localStorage
    if (data) {
      // Converte os dados de volta para um array de objetos Register
      return JSON.parse(data);
    }

    // Se não houver dados, retorna um array vazio
    return [];
  }
}

export default List;
