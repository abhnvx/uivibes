import React, { Component } from "react";



class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
          websites: [],
        };
      }

    componentDidMount() {
        fetch('https://api.airtable.com/v0/app1J8ImRepSzlOgj/main?api_key=keyzYLpDP2GogyIWt')
        .then((resp) => resp.json())
        .then(data => {
           this.setState({ websites: data.records });
        }).catch(err => {
          // Error :(
        });
      }


    render() { 
        return (
        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 justify-center pb-20">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:p-5">
                {this.state.websites.map(website => <WebsiteCard {...website.fields} /> )}
            </div>
        </main>
        );
    }
}
 
export default Card;


const WebsiteCard = ({name, description, imagelink, websitelink, tag1, tag2, tag3, tag4, tag5, tag6, tag7}) => (
    <div class="max-w-sm rounded overflow-hidden shadow-lg ml-4">
    <img
      class="w-full"
      src={imagelink}
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{name}</div>
      <p class="text-gray-700 text-base">
      {description}
      </p>

      <a href={websitelink} class="text-gray-500 text-base">
      {websitelink}
      </a>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {tag1}
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag2}
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag3}
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag4}
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag5}
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag6}
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {tag7}
      </span>
    </div>
  </div>
  );
