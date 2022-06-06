interface IConfiguration {
  modalConfiguration: IModalConfiguration;
}

interface IModalConfiguration {
  showModal: boolean;
  currentUserId?: string;
}

export type { IConfiguration };
