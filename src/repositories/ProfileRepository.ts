// import { getManager, UpdateResult, DeleteResult } from 'typeorm';
// import { Profile } from '../database/entities/Profile';

// export class ProfileRepository {
//     create(profile: Profile): Promise<Profile> {
//         return getManager().getRepository(Profile).save(profile);
//     }

//     show(): Promise<Profile[]> {
//         return getManager().getRepository(Profile).createQueryBuilder('Profile')
//             .select(['Profile.id', 'Profile.name', 'Profile.lastName'])
//             .getMany();
//     }

//     getById(idProfile: string): Promise<Profile | undefined> {
//         return getManager().getRepository(Profile).findOne({
//             where: {
//                 id: idProfile
//             }
//         });
//     }

//     update(idProfile: string, updateProfile: Profile): Promise<UpdateResult> {
//         return getManager().getRepository(Profile)
//             .update({id: idProfile}, updateProfile);
//     }

//     delete(idProfile: string): Promise<DeleteResult> {
//         return getManager().getRepository(Profile)
//             .delete({id: idProfile});
//     }
// }