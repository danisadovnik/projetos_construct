const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.custom,
		C3.Behaviors.wrap,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.Sprite.Acts.RotateCounterclockwise,
		C3.Behaviors.custom.Acts.AccelerateAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.custom.Acts.SetSpeed,
		C3.Behaviors.custom.Acts.SetAngleOfMotion,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Personalizado: 0},
	{DarAVolta: 0},
	{Jogador: 0},
	{Teclado: 0},
	{Projétil: 0},
	{DestruirForaDoLayout: 0},
	{Projetil: 0},
	{Asteroide: 0}
];

self.InstanceType = {
	Jogador: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Projetil: class extends self.ISpriteInstance {},
	Asteroide: class extends self.ISpriteInstance {}
}