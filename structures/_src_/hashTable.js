import List_double_linked from "./double_linked_list";

export default class Hash {
  constructor() {
    this.table = [];
  }

  // Função de hash
  hashFunction(key) {
    return key % 11;
  }

  // Adicionar um valor na tabela
  add(key, value) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      this.table[index] = new List_double_linked();
    }
    this.table[index].append({ key, value });
  }

  // Buscar um valor na tabela
  get(key) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      return undefined;
    }
    let currentNode = this.table[index].head;
    while (currentNode) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  // Remover um valor da tabela
  remove(key) {
    const index = this.hashFunction(key);
    if (!this.table[index]) {
      return false;
    }
    let currentNode = this.table[index].head;
    while (currentNode) {
      if (currentNode.data.key === key) {
        this.table[index].removeAt(currentNode.data);
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

