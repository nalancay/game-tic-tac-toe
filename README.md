# Link App

Url del tic-tac-toe: [https://nalancay-tic-tac-toe.netlify.app/](https://nalancay-tic-tac-toe.netlify.app/).

## Aplicacion técnica de Tabla de usuarios

El objetivo de la creacion de un juego de Tic Tac Toe. A continuación se explica su funcionalidad:

### `Funcionalidades`

✓ [x] El primer jugador en ir coloca una ❌ en cualquier lugar del tablero haciendo clic en un cuadrado, y luego el siguiente jugador podrá colocar una ⚪, y continúa alternando así cada turno.\
✓ [x] Determinar el estado del turno del jugador para ❌ u ⚪.\
✓ [x] Determina si algún jugador ganó al obtener 3 ❌ u ⚪ en una fila diagonal, horizontal o vertical. \
✓ [x] Si hay un ganador, muestra un mensaje en un pequeño modal mostrando el texto 'Gano ❌ u ⚪' y lanza confetti cuando gana la partida.
✓ [x] Si nadie gana, entonces muestra un mensaje en un pequeño modal mostrando el texto 'Empate'.\
✓ [x] Implementar la función de reinicio que reinicia todo el tablero.\
✓ [x] Estilo personalizado para el movimiento del puntero

### `Detalle Técnico`

🎉 Hecho con React, utilizacion de libreria canvas-confetti, persistir la partida del juego en el localStorage, suscribir eventos en useEffect para determinar la posición del puntero del mouse al realizar movimiento
