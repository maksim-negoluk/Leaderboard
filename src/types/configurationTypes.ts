interface IConfiguration {
  modalConfiguration: IModalConfiguration;
}

interface IModalConfiguration {
  showModal: boolean;
  showProfile: boolean;
  currentUserId?: string;
}

export type { IConfiguration };
