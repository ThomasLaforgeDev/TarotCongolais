import * as SocketIO from 'socket.io'
import { Player } from '../modules/Player'
import { Game } from '../modules/Game'

export interface SocketTarotInterface extends SocketIO.Socket {
    player: Player,
    gameRoomId: string
}

export class SocketTarot {

    private _socket : SocketTarotInterface;

	constructor(socket: SocketTarotInterface) {
        this.socket = socket;
    }

	showSocketId(){
		console.log('socket id :' + this.socket.id)
	}

	public get socket(): SocketTarotInterface {
		return this._socket;
	}
	public set socket(value: SocketTarotInterface) {
		this._socket = value;
	}

}

export class SocketIOTarot {

    private _socketIO: SocketIO.Server;

	constructor(socketIO: SocketIO.Server) {
        this.socketIO = socketIO
    }

	getAllSocketId(){
		return Object.keys(this.socketIO.sockets.connected)
	}

	getAllSockets(){
		return Object.keys(this.socketIO.sockets.connected).map( socketid => {
			return this.socketIO.sockets.connected[socketid]
		})
	}

	getAllPseudo(){
		return this.getAllSockets().filter( (socket:SocketTarotInterface) => {
			return socket.player;
		}).map( (socket:SocketTarotInterface) => {
			return socket.player.username;
		})
	}

	updateGameUI(gameroomId: string, game: Game){
		// this.socketIO.emit()
		console.log('update game ui')
	}
    
	public get socketIO(): SocketIO.Server {
		return this._socketIO;
	}

	public set socketIO(value: SocketIO.Server) {
		this._socketIO = value;
	}

}