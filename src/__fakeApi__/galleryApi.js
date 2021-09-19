// // import {
// //   addDays,
// //   endOfDay,
// //   setHours,
// //   setMinutes,
// //   startOfDay,
// //   subDays,
// // } from 'date-fns';
// import createResourceId from '../utils/createResourceId';
// import deepCopy from '../utils/deepCopy';

// // const now = new Date();

// const images = [
//   {
//     source:
//       'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4050&q=80',
//   },
//   {
//     source:
//       'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
//   },
//   {
//     source:
//       'https://images.unsplash.com/photo-1541837283948-d4242eda4585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1835&q=80',
//   },
// ];

// class GalleryApi {
//   getImages() {
//     return Promise.resolve(images);
//   }

//   uploadImage(data) {
//     return new Promise((resolve, reject) => {
//       try {
//         const { allDay, description, end, start, title } = data;

//         // Make a deep copy
//         const clonedEvents = deepCopy(images);

//         // Create the new event
//         const event = {
//           id: createResourceId(),
//           allDay,
//           description,
//           end,
//           start,
//           title,
//         };

//         // Add the new event to events
//         clonedEvents.push(event);

//         // Save changes
//         events = clonedEvents;

//         resolve(deepCopy(event));
//       } catch (err) {
//         console.error('[Calendar Api]: ', err);
//         reject(new Error('Internal server error'));
//       }
//     });
//   }

//   deleteImage(eventId) {
//     return new Promise((resolve, reject) => {
//       try {
//         // Make a deep copy
//         const clonedEvents = deepCopy(events);

//         // Find the event that will be removed
//         const event = events.find((_event) => _event.id === eventId);

//         if (!event) {
//           reject(new Error('Event not found'));
//           return;
//         }

//         events = events.filter((_event) => _event.id !== eventId);

//         // Save changes
//         events = clonedEvents;

//         resolve(true);
//       } catch (err) {
//         console.error('[Calendar Api]: ', err);
//         reject(new Error('Internal server error'));
//       }
//     });
//   }
// }

// export const galleryApi = new GalleryApi();
