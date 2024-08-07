import type Service from "./Service";
import ServiceImpl from "./ServiceImpl";

let SERVICE: Service | null = null;

const getServiceInstance = () => {
  if (!SERVICE) {
    SERVICE = new ServiceImpl();
  }
  return SERVICE;
};

export default getServiceInstance;
