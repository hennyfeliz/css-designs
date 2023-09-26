


export const getHouses = () => {
  const jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2JlcnRfaiIsImV4cCI6MTY5NDkzMjI2NywiaWF0IjoxNjk0OTAzNDY3LCJyb2wiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9fQ.4Wkrk6EohfPx4q_EIT2gupI4xCXKVUwa6hx32pF3OUg"
  const url = "http://localhost:8080/api/v1/images/img/1002"; // Reemplaza esto con la URL de tu servidor de inicio de sesión

  return fetch(url, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
      return data;
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error);
      throw error;
    });
}