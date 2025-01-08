export default function TicketItem({ dispatch, ticket }) {
    const { id, title, description, priority } = ticket

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high"
    }

    return (
        <div className="ticket-item">
            <div className={`priority-dot ${priorityClass[ticket.priority]}`}>
                <h3>{title}</h3>
                <h3>{description}</h3>
            </div>
        </div>
    );
}