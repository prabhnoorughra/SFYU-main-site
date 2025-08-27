import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";


beforeEach(() => {
  vi.restoreAllMocks(); // reset mocks between tests
});


function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return <RouterProvider router={router} />;
}


describe('page tests', () => {
    it("renders correct home page", () => {
        render(renderAt("/"));
        expect(screen.getByText(/student-led non-profit organization/i)).toBeInTheDocument();
        const navlinks = screen.getAllByRole('link');
        expect(navlinks.length).toBe(10);
    });
    it("renders correct home page and can view team page by clicking links", async () => {
        render(renderAt("/"));
        const teamLinks = screen.getAllByRole('link', { name: /^Our Team$/i });
        await userEvent.click(teamLinks[0]);
        expect(screen.getByText(/I am honoured to serve as the President of STEM Fellowship/i)).toBeInTheDocument();
        expect(screen.getByText(/Callisto/i)).toBeInTheDocument();
    });
    it("renders correct home page and can view events page by clicking links", async () => {
        render(renderAt("/"));
        const eventLinks = screen.getAllByRole('link', { name: /^Events$/i });
        await userEvent.click(eventLinks[0]);
        expect(screen.getByText(/Jul 2025/i)).toBeInTheDocument();
        expect(screen.getByText(/Jan 2025/i)).toBeInTheDocument();
    });
    it("renders correct home page and can view apply page by clicking links", async () => {
        render(renderAt("/"));
        const applyLinks = screen.getAllByRole('link', { name: /^Registration$/i });
        await userEvent.click(applyLinks[0]);
        const submitBtn = screen.getByRole('button', { name: /submit/i });
        expect(submitBtn).toBeInTheDocument();
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/YorkU Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText("Program")).toBeInTheDocument();
    });
    it("renders correct home page and can view contacts page by clicking links", async () => {
        render(renderAt("/"));
        const contactsLinks = screen.getAllByRole('link', { name: /^Contacts$/i });
        await userEvent.click(contactsLinks[0]);
        expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
        expect(screen.getByText(/TikTok/i)).toBeInTheDocument();
        expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
    });
});
describe('Application popup messages', () => {
    it("shows errors when application fails", async () => {
        vi.spyOn(window, "fetch")
        .mockResolvedValueOnce(
                new Response(undefined, {
                status: 200,
            })
        )
        .mockResolvedValueOnce(
                new Response(JSON.stringify({ errors:[{msg: "Invalid email"},{msg: "Invalid student ID"} ]}), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            })
        );

        render(renderAt("/apply"));
        const submitBtn = screen.getByRole('button', { name: /submit/i });
        expect(submitBtn).toBeInTheDocument();

        await userEvent.type(screen.getByLabelText(/First Name/i), "John");
        await userEvent.type(screen.getByLabelText(/Last Name/i), "Doe");
        await userEvent.type(screen.getByLabelText(/YorkU Email/i), "good@my.yorku.ca");
        await userEvent.type(screen.getByLabelText(/Student Number/i), "123456789");
        await userEvent.type(screen.getByLabelText("Program"), "Comp Sci");
        const select = screen.getByLabelText(/study year/i);
        await userEvent.selectOptions(select, 'Third');
        expect(select).toHaveValue('Third');
        await userEvent.click(submitBtn);

        expect(await screen.findByText("Invalid email")).toBeInTheDocument();
        expect(await screen.findByText("Invalid student ID")).toBeInTheDocument();
    });
    it("shows success when application goes through", async () => {
        vi.spyOn(window, "fetch")
        .mockResolvedValueOnce(
                new Response(undefined, {
                status: 200,
            })
        )
        .mockResolvedValueOnce(
                new Response(JSON.stringify({ applicant: {name: "John"}}), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            })
        );

        render(renderAt("/apply"));
        const submitBtn = screen.getByRole('button', { name: /submit/i });
        expect(submitBtn).toBeInTheDocument();

        await userEvent.type(screen.getByLabelText(/First Name/i), "John");
        await userEvent.type(screen.getByLabelText(/Last Name/i), "Doe");
        await userEvent.type(screen.getByLabelText(/YorkU Email/i), "good@my.yorku.ca");
        await userEvent.type(screen.getByLabelText(/Student Number/i), "123456789");
        await userEvent.type(screen.getByLabelText("Program"), "Comp Sci");
        const select = screen.getByLabelText(/study year/i);
        await userEvent.selectOptions(select, 'Third');
        expect(select).toHaveValue('Third');
        await userEvent.click(submitBtn);

        expect(await screen.findByText("Application Submitted!")).toBeInTheDocument();
    });
})


describe('Unknown Path', () => {
    it('unknown path → ErrorPage', () => {
        render(renderAt("/random"));
        expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
        expect((screen.getByRole("link").textContent)).toMatch(/Take me Back/i);
  });
});