export type Handlers = {
  fullscreen: Function;
  pipF: Function;
  mute: Function;
  chooseScreen: Function;
};

export type Room = {
  id: string;
  created: Date;
};

export type Rooms = {
  [id: string]: Room;
};
