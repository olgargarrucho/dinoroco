function getDataApi() {
    return fetch(
      'https://randomuser.me/api/?results=50'
    )
      .then((response) => response.json())
      .then((data) => {
        const result = data.results.map((user) => {
          return {
            id: user.login.uuid,
            name: `${user.name.title} ${user.name.first} ${user.name.last}`,
            gender: user.gender,
            age: user.dob.age,
            city: user.location.city,
            country: user.location.country,
            phone: user.phone,
            photo: user.picture.large,
            email: user.email,
          }
        })
        return result;
      });
  }
  export default getDataApi;
  