config = {
    draggable: true,
    position: 'start',
    showNotation: true,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: updateBoard
}
var boardrenderer = Chessboard('myBoard', config)

$('#resetBtn').on('click', boardrenderer.start)
$('#resetBtn').on('click', boardvalidator.reset)