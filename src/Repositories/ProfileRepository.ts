import { UpdateResult, DeleteResult, getRepository } from 'typeorm';
import { Profile } from '../Entities/Profile';

export class ProfileRepository {
    create(profile: Profile): Promise<Profile> {
        return getRepository(Profile).save(profile);
    }

    show(): Promise<Profile[]> {
        return getRepository(Profile).createQueryBuilder('Profile')
            .select(['Profile.id', 'Profile.name', 'Profile.lastName'])
            .getMany();
    }

    getById(idProfile: string): Promise<Profile | undefined> {
        return getRepository(Profile).findOne({
            where: {
                id: idProfile
            }
        });
    }

    update(idProfile: string, updateProfile: Profile): Promise<UpdateResult> {
        return getRepository(Profile)
            .update({id: idProfile}, updateProfile);
    }

    delete(idProfile: string): Promise<DeleteResult> {
        return getRepository(Profile)
            .delete({id: idProfile});
    }
}