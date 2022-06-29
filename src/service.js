import React from 'react';
import axios from "axios";

export function doGet(url) {
  return   axios.get("https://jsonplaceholder.typicode.com"+url)
        .then((response) => response.data)
}
export function doPost(url,data) {
  return   axios.post("https://jsonplaceholder.typicode.com"+url,data)
      .then((response) => response.data)
}



