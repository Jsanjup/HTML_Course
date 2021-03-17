const tubos_inicio = [
    ["rojo", "azul", "verde", "vacio"],
  
  ]
  const tubos_perdido = [
    ["rojo", "azul", "verde", "vacio"],
  
  ]
  
  const tubos_ganado = [
    ["rojo", "azul", "verde", "vacio"],
  
  ]
  
  function haGanado(juego){
    let victoria = false;
    // Calcular si ha ganado
    return victoria
  }
  
  function haPerdido(juego){
    let derrota = false;
    // Calcular si ha perdido
    return derrota
  }
  
  console.log(haGanado(tubos_inicio)) //debería ser false
  console.log(haGanado(tubos_perdido)) //debería ser false
  console.log(haGanado(tubos_ganado)) //debería ser true
  console.log(haPerdido(tubos_inicio)) //debería ser false
  console.log(haPerdido(tubos_perdido)) //debería ser true
  console.log(haPerdido(tubos_ganado)) //debería ser false