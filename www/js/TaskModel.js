function getTasks(){
  //Lista de Itens
  this.items = [
    {nome:'Item 01',finalizada:false},
    {nome:'Item 02',finalizada:false},
    {nome:'Item 01',finalizada:false}];

    //Adicionar Item
    this.add = function(item)
    {
      this.items.push(item);
    }

    //Remover Item
    this.remove = function(item)
    {
      var pos = this.items.indexOf(item);
      this.items.splice(pos,1);
    }
}
