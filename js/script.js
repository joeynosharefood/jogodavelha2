var board = ['', '', '', '', '', '','', '', ''] 
var turn_player_change = 0
var game_is_over = false
const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function render(){
    let div = ''
    for (let pos in board){
        div += `<div id="${pos}" class="box" onclick="input(${pos}, turn())">${board[pos]}</div>`
    }
    document.querySelector('div.game-board').innerHTML = div
}
function turn(){
    symbol = ['x', 'o']
    var turn_player = symbol[turn_player_change]
    turn_player_change = turn_player_change == 1 ? 0 : 1
    return turn_player
}
function input(pos, symbol) {
    board[pos] = board[pos] == '' ? symbol : board[pos]
    render()
    win_conditions(symbol)
    game_over(game_is_over)
}
function win_conditions(symbol){
    for (let i in conditions){
        if (board[conditions[i][0]] == symbol&&
            board[conditions[i][1]] == symbol&&
            board[conditions[i][2]] == symbol){
                game_is_over = true
    }       
}   
}
function  game_over(logic=false){
    if (logic == true){
        game_is_over = false
        board = ['', '', '', '', '', '','', '', ''] 
        render()
    }
}