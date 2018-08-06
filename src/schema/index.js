import { schema } from 'normalizr'

const classes = new schema.Entity('classes',{}, {
    idAttribute:'id'
});

const teacher = new schema.Entity('teachers',{},{
    idAttribute:'id'
});

const satisfiled = new schema.Entity('satisfiled',{
    class_info:classes,
    teacher_info:teacher
},{
    idAttribute:'time'
});

const lessonEntities = new schema.Entity('lessonEntities',{
    classInfo:classes,
    teacherInfo:teacher
},{
    idAttribute:'id'
});

export const SATISFILEDLIST = [ satisfiled ];
export const LESSONLIST = [ lessonEntities ]