const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.CompareSpeed,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.OnDestroyed
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{Coelho: 0},
	{Fundo: 0},
	{Mouse: 0},
	{Grama: 0},
	{CanoBaixo: 0},
	{CanoTopo: 0},
	{AreaPontos: 0},
	{TextoPontos: 0},
	{TextoInterface: 0},
	{BotaoJogar: 0},
	{Áudio: 0},
	{Pontos: 0}
];

self.InstanceType = {
	Coelho: class extends self.ISpriteInstance {},
	Fundo: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Grama: class extends self.ISpriteInstance {},
	CanoBaixo: class extends self.ISpriteInstance {},
	CanoTopo: class extends self.ISpriteInstance {},
	AreaPontos: class extends self.ISpriteInstance {},
	TextoPontos: class extends self.ITextInstance {},
	TextoInterface: class extends self.ITextInstance {},
	BotaoJogar: class extends self.IButtonInstance {},
	Áudio: class extends self.IInstance {}
}