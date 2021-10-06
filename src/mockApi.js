// mock api
import { createServer, Model } from "miragejs";

// setup mock api
export default function startApi() {
  createServer({
    models: {
      category: Model,
      recommendedPlace: Model,
      popularPlace: Model,
      place: Model
    },

    routes() {
      // this.urlPrefix = "https://yz3sb.csb.app/";
      this.namespace = "api";
      this.get("/categories");
      this.get("/categories/:id");

      this.get("/recommendedPlaces");
      this.get("/recommendedPlaces/:id");

      this.get("/popularPlaces");
      this.get("/popularPlaces/:id");

      this.get("/places");
      this.get("/places/:id");
    },
    seeds(server) {
      const categories = [
        {
          name: "All",
          gradients: {
            top: "#ACC9E6",
            bottom: "#95B2D1"
          },
          icon: "collection"
        },
        {
          name: "Hiking trips",
          gradients: {
            top: "#C3D4DC",
            bottom: "#A4BCB8"
          },
          icon: "flag"
        },
        {
          name: "City tours",
          gradients: {
            top: "#DCDBF7",
            bottom: "#B2C9F1"
          },
          icon: "library"
        },
        {
          name: "Beaches",
          gradients: {
            top: "#F8BEA9",
            bottom: "#D6B5B4"
          },
          icon: "sun"
        }
      ];
      const recommendedPlaces = [
        {
          name: "Chocolate Hills",
          img: {
            url:
              "https://images.unsplash.com/photo-1613190151853-3a11f605f4cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
            owner: "https://unsplash.com/@rob1p",
            attributionHtml: `Photo by <a href="https://unsplash.com/@rob1p?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Robin P</a> on <a href="https://unsplash.com/@rob1p?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            `
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "Carmen",
          avgRating: 4.2,
          reviewCount: 1899
        },
        {
          name: "Underground River",
          img: {
            url:
              "https://images.unsplash.com/photo-1581216061628-2187b387eb5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=877&q=80",
            owner: "https://unsplash.com/@dmilmont",
            attributionHtml: `Photo by <a href="https://unsplash.com/@dmilmont?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Milmont</a> on <a href="https://unsplash.com/@dmilmont?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            `
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "Puerto Princesa",
          avgRating: 4.3,
          reviewCount: 1899
        },
        {
          name: "El Nido",
          img: {
            url:
              "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
            attributionHtml: `Photo by <a href="https://unsplash.com/@cjtagupa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cris Tagupa</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            `
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "El Nido",
          avgRating: 4.1,
          reviewCount: 1899
        },
        {
          name: "Intramuros",
          img: {
            url:
              "https://images.unsplash.com/photo-1521295105158-fdc2a8225628?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80",
            attributionHtml: `Photo by <a href="https://unsplash.com/@donniiee96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Donnie</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            `
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "Manila",
          avgRating: 4.8,
          reviewCount: 1899
        }
      ];
      const popularPlaces = [
        {
          name: "Banaue Rice Terraces",
          img: {
            url:
              "https://images.unsplash.com/photo-1621217308295-afe2f0b40a69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80",
            owner: "https://unsplash.com/@ashvisual_10",
            attributionHtml: `Photo by <a href="https://unsplash.com/@ashvisual_10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ashton Jalra Garcia</a> on <a href="https://unsplash.com/s/photos/banaue-rice-terraces?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "",
          avgRating: 4.6,
          reviewCount: 1899
        },
        {
          name: "Boracay",
          img: {
            url:
              "https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80",
            owner: "https://unsplash.com/@hectorjp",
            attributionHtml: `Photo by <a href="https://unsplash.com/@hectorjp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hector Periquin</a> on <a href="https://unsplash.com/s/photos/boracay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "",
          avgRating: 4.8,
          reviewCount: 1899
        },
        {
          name: "CYC Beach",
          img: {
            url:
              "https://images.unsplash.com/photo-1591803294165-216f1818912e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
            attributionHtml: `Photo by <a href="https://unsplash.com/@travellarapp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Guillermo Bresciano</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            `
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "Coron",
          avgRating: 4.1,
          reviewCount: 1899
        },
        {
          name: "Vigan",
          img: {
            url:
              "https://images.unsplash.com/photo-1605449535614-389323fda36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
            attributionHtml: `Photo by <a href="https://unsplash.com/@rheag_20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rhea Claire Gomez</a> on <a href="https://unsplash.com/photos/9VefctMzC2M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            `
          },
          region: "Asia-Pacific",
          country: "Philippines",
          city: "Vigan",
          avgRating: 4.7,
          reviewCount: 1899
        }
      ];
      const places = [...recommendedPlaces, ...popularPlaces];
      categories.forEach((item) => {
        server.create("category", item);
      });
      recommendedPlaces.forEach((item) => {
        server.create("recommendedPlace", item);
      });
      popularPlaces.forEach((item) => {
        server.create("popularPlace", item);
      });
      places.forEach((item) => {
        server.create("place", item);
      });
    }
  });
}
