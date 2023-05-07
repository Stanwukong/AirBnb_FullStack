# Full Stack Airbnb Clone

This is a full stack Airbnb clone built using Next.js 13, App router, React, Tailwind CSS, Prisma, MongoDB, and NextAuth. It provides a platform for users to browse and book vacation rentals as well as list their own rental properties.

## Features
* User User authentication and authorization using NextAuth
* User profile management
* Properly listing management
* Search functionality to filter rental properties based on location, date range, and number of guests
* Intergration with the Stripe API for payment processing
* Responsive design Using Tailwind CSS

## Technologies Used
* [Next.js](https://next.js.org) - A React framework for server-side rendering and static site generation
* [React](https://reactjs.org) - A JavaScript library for building user interfaces
* [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
* [Zustand](https://zustand.surge.sh) - A state management library for React
* [Axios](https://axios-http.com) - A promise-based HTTP client
* [React-hot-toast](https://react-hot-toast.com) - A React library for toast notifications
* [Prisma](https://prisma.io) - An open-source ORM for Node.js
* [MongoDB](https://mongodb.com) - A document-based, NoSQL database
* [NextAuth](https://next-auth.js.org) - Authentication for Next.js
* [Next-Cloudinary](https://next-cloudinary.spacejelly.dev) - A Next.js library for image and video upload and storage

## Getting Started
1. Clone the repository
```
git clone https://github.com/your-username/full-stack-airbnb-clone.git
```

2. Install dependencies
```
cd airbnb_fullstack
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=<...> // To be included
STRIPE_SECRET_KEY=<...> // To be included
```

4. Start the development server
```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

## Contributing
Contributions are welcome! Please open an issue or pull request for any changes.

## License
This project is licensed under the [MIT License](License.txt)