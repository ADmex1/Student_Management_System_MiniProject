import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Popconfirm, message } from "antd";

export default function Index({ auth, students = [] }) {
    const handleEdit = (student) => {
        // Implement edit logic or navigation here
        message.info(`Edit student: ${student.name}`);
    };

    const handleDelete = (student) => {
        // Implement delete logic here
        message.success(`Deleted student: ${student.name}`);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Student List
                </h2>
            }
        >
            <Head title="Student List" />
            <div className="bg-gray-100 py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">
                                    Students
                                </h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the Students.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <a
                                    href=""
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Add Student
                                </a>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg relative">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Email</th>
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Class</th>
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Section</th>
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Created At</th>
                                                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" />
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {students.length > 0 ? students.map(student => (
                                                    <tr key={student.id}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{student.id}</td>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{student.name}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.email}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.class.id}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.section.id}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.created_at}</td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <Button
                                                                type="link"
                                                                onClick={() => handleEdit(student)}
                                                                style={{ padding: 0, marginRight: 8 }}
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Popconfirm
                                                                title="Are you sure to delete this student?"
                                                                onConfirm={() => handleDelete(student)}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Button type="link" danger style={{ padding: 0 }}>
                                                                    Delete
                                                                </Button>
                                                            </Popconfirm>
                                                        </td>
                                                    </tr>
                                                )) : (
                                                    <tr>
                                                        <td colSpan={7} className="text-center py-4 text-gray-500">
                                                            No students found.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>{/* Pagination Links */}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}