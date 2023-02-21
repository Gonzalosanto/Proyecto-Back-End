const socket = io();

socket.emit('msg', "Hola soy un cliente emitiendo un evento por websocket!");

socket.on("evento_socket_indivual", data => {
    console.log(data);
});

socket.on("evento_para_todos_los_sockets", data => {
    console.log(data);
});

socket.on("evento_para_todos_menos_socket_actual", data => {
    console.log(data);
});
