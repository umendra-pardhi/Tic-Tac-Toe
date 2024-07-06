# Tic Tac Toe Game

This is a simple Tic Tac Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid with "X" or "O". The game identifies a winner or a draw and allows for resetting the game to play again.

## Features

- Two-player mode
- Displays current player's symbol
- Detects and announces the winner
- Identifies a draw when all boxes are filled with no winner
- Option to reset the game or start a new game

## Files

- `index.html`: The main HTML file containing the structure of the Tic Tac Toe game.
- `style.css`: The CSS file to style the game interface.
- `game.js`: The JavaScript file containing the game logic.

## How to Run

1. Clone the repository or download the files.
2. Open `index.html` in a web browser to start the game.

## HTML Structure

- The game board is created using a 3x3 grid of buttons.
- The game includes a title, player descriptions, and reset buttons.
- A dialog box is used to display the winner or announce a draw.

## JavaScript Logic

### Variables and Constants

- `boxes`: NodeList of all the game buttons.
- `btnReset`: The reset button element.
- `newGame`: The new game button element within the dialog.
- `dialog`: The background element of the dialog.
- `dialogContent`: The content of the dialog.
- `dPlayer`: The span element to display the winner in the dialog.

### Game Flow

1. **Player Turn**: Players take turns clicking on the boxes. Player 1 uses "X" and Player 2 uses "O".
2. **Check Winner**: After each move, the game checks for a winning pattern or a draw.
3. **Dialog Display**: If there's a winner or a draw, a dialog box appears showing the result.
4. **Reset Game**: Players can reset the game at any time using the reset button or start a new game from the dialog.

### Functions

- **checkWinner**: Checks if there's a winning combination.
- **disableAll**: Disables all boxes once a winner is found.
- **resetGame**: Resets the game to its initial state.
- **showDialog**: Shows the result dialog.
- **hideDialog**: Hides the result dialog.
- **matchWin**: Displays the winner in the dialog.
- **matchDraw**: Displays a draw message in the dialog.

## Styling

Basic styling is provided in `style.css` to layout the game board and dialog.

## Example

To play the game, simply open `index.html` in your browser and start clicking on the boxes. The game will handle the turns, check for a winner, and display the result in a dialog box. You can reset the game or start a new game using the provided buttons.

Enjoy playing Tic Tac Toe!
