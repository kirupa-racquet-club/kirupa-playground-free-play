var
	qS = function(){ return document.querySelector.apply(document, arguments) },
	players = ['IQAndreas', 'krilnon', 'senocular', 'kirupa', 'lnsiu', 'benmarte'],
	court,
	textSize = 20,
	start = (new Date).getTime()
	

window.onload = init

function init(){
	court = boxbox.createWorld(qS('#court'))
	var 
		c = qS('#court')
		ctx = c.getContext('2d')
	
	setInterval(function(){
		court.createEntity({
			name: 'hmm',
			type: 'dynamic',
			x: 10,
			y: 0,
			image: players[(Math.floor(((new Date).getTime() - start) / 1000)) % players.length].toDataURL(),
			onTick: function(){
				var now = this.position()
				if(now.y > 40) this.destroy()
				if(this.pos && (now.x == this.pos.x && now.y == this.pos.y)){
					console.log('destroying')
					this.destroy()
				}
				this.pos = now
			}
		})
	}, 1000)
	
	court.createEntity({
		name: 'left',
		type: 'static',
		height: 0.3,
		width: 200,
		x: 5, y: 10,
		rotation: 45,
		borderWidth: 0,
		restitution: 1.5,
		color: 'green'
	})
	
	court.createEntity({
		name: 'right',
		type: 'static',
		height: 0.3,
		width: 200,
		x: 30, y: 10,
		rotation: -45,
		borderWidth: 0,
		restitution: 1.5,
		color: 'green'
	})
	
}

String.prototype.toDataURL = function(maxWidth){
	maxWidth = maxWidth || 100
	var canvas = document.createElement('CANVAS')
	canvas.width = textSize * this.length
	canvas.height = textSize
	var ctx = canvas.getContext('2d')
	ctx.fillStyle = 'black'
	ctx.font = textSize + 'px sans-serif'
	ctx.fillText(this, textSize, textSize, maxWidth)
	return canvas.toDataURL()
}