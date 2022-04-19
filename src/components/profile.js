/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const profile = () => {
    const profileDiv = document.createElement('div');
    const templateProfile = `
    
  `;
  profileDiv.innerHTML += templateProfile;
  
  
    return profileDiv;
  };
  