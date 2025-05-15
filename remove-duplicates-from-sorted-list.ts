function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next)
        return head;

    let current = head;
    let next = head.next;
    let dummy = new ListNode(-1, head);
    let previous = dummy;

    while (next) {
        if (next.val == current.val) 
            previous.next = next.next;
        else if (previous.next !== next) 
            previous = current;
        
        next = next.next;
        current = current.next;
    }
    return dummy.next;
};

const head = [1,2,3,3,4,4,5];
deleteDuplicates(head);