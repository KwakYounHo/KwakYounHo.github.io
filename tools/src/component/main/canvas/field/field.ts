interface Props {
  c: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scale: {
    x: number,
    y: number
  }
}
export class Field {
  c: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scale: {
    x: number,
    y: number
  }
  constructor({ c, ctx, scale }: Props) {
    this.c     = c;
    this.ctx   = ctx;
    this.scale = scale
  }

  private get Center(): {x: number, y: number} {
    return {x: this.c.width / 2, y: this.c.height / 2}
  }

  draw(): void {
    this.ctx.fillStyle = 'aqua';
    this.ctx.fillRect((this.Center.x) - (this.scale.x / 2), (this.Center.y) - (this.scale.y / 2), this.scale.x, this.scale.y);
  }
}