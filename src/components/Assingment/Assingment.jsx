import React, { useState, useRef, useEffect } from 'react';
import './Assingment.scss';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { submitAssignment, deleteAssignment, gradeAssignment } from '../../rtk/Slices/CoursesSlice';

function Assignment({ courseId, assignmentTitle, assignmentId, grade })
{
    const [newAssignmentTitle, setNewAssignmentTitle] = useState(assignmentTitle);
    const [newAssignmentFile, setNewAssignmentFile] = useState(null);
    const [editingAssignment, setEditingAssignment] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [grading, setGrading] = useState(grade);

    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const handleGrade = () =>
    {
        dispatch(gradeAssignment({ courseId, assignmentId, grade: grading }));
        Swal.fire({
            icon: 'success',
            title: 'Assignment Graded',
            text: `Grade "${grading}" submitted successfully for assignment "${newAssignmentTitle}"!`,
        });
    };

    const submitAssignmentHandler = () =>
    {
        if (newAssignmentTitle.trim() !== '' && newAssignmentFile) {
            const formData = new FormData();
            formData.append('file', newAssignmentFile);
            formData.append('title', newAssignmentTitle);

            dispatch(submitAssignment({ courseId, assignmentId, formData }));
            setSubmitted(true);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Submission Error',
                text: 'Please provide both assignment title and file.',
            });
        }
    };

    useEffect(() =>
    {
        if (submitted) {
            Swal.fire({
                icon: 'success',
                title: 'Assignment Submitted',
                text: `Assignment "${newAssignmentTitle}" submitted successfully!`,
            });
            setEditingAssignment(false);
        }
    }, [submitted, newAssignmentTitle]);

    const startEditing = () =>
    {
        setEditingAssignment(true);
        setNewAssignmentFile(null);
    };

    const saveChanges = () =>
    {
        if (newAssignmentTitle.trim() !== '' && newAssignmentFile) {
            setEditingAssignment(false);
            Swal.fire({
                icon: 'success',
                title: 'Changes Saved',
                text: 'Your changes have been saved successfully!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Save Error',
                text: 'Please provide both assignment title and file.',
            });
        }
    };

    const deleteAssignmentHandler = () =>
    {
        Swal.fire({
            icon: 'warning',
            title: 'Delete Assignment?',
            text: 'This action cannot be undone.',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) =>
        {
            if (result.isConfirmed) {
                dispatch(deleteAssignment({ courseId, assignmentId }));
                Swal.fire({
                    icon: 'success',
                    title: 'Assignment Deleted',
                    text: 'The assignment has been deleted successfully!',
                });
            }
        });
    };

    return (
        <div className='app col-12 pt-24 max-w-3xl'>
            <div className="mainAssignment_div col-10">
                <h1 className='col-12'>Submission of Assignments</h1>
                <div className="submit-assignment col-12">
                    <h2>Submit Assignment</h2>
                    <form onSubmit={(e) =>
                    {
                        e.preventDefault();
                        submitAssignmentHandler();
                    }}>
                        <input value={newAssignmentTitle} onChange={(e) => setNewAssignmentTitle(e.target.value)} />
                        <div className="file-input-container">
                            <input type="file" ref={fileInputRef} onChange={() => setNewAssignmentFile(fileInputRef.current.files[0])} />
                        </div>
                        <button className='col-3' type="submit">Submit</button>
                    </form>
                </div>
                <div className="assignments col-12">
                    <h2>Assignments</h2>
                    {submitted && (
                        <ul>
                            <li>
                                <span className='mr-10'>{newAssignmentTitle}</span>
                                {newAssignmentFile && <span className='mr-10'>{newAssignmentFile.name}</span>}
                                <button onClick={startEditing}>Edit</button>
                                <button onClick={deleteAssignmentHandler}>Delete</button>
                                <input type="number" value={grading} onChange={(e) => setGrading(e.target.value)} placeholder="Grade" />
                                <button onClick={handleGrade}>Grade</button>
                            </li>
                        </ul>
                    )}
                    {editingAssignment && (
                        <div>
                            <input value={newAssignmentTitle} onChange={(e) => setNewAssignmentTitle(e.target.value)} />
                            <input type="file" ref={fileInputRef} onChange={() => setNewAssignmentFile(fileInputRef.current.files[0])} />
                            <button onClick={saveChanges}>Save Changes</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Assignment;
