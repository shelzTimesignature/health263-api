
export const AuthorisationHeaders={
  auth: {
    username: process.env.NAME ?? '',
    password: process.env.PASSWORD ?? '',
  },
}

export const API_URL = `http://localhost:7048/BC140/ODataV4/Company('St Annes Hospital - Live')/`
