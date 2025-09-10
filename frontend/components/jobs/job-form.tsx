import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { jobsApi } from '@/lib/api';

interface JobFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function JobForm({ onSuccess, onCancel }: JobFormProps) {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    requirements: '',
    tags: '',
    featured: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      setForm(f => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await jobsApi.createJob({
        ...form,
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean).join(','),
        featured: !!form.featured,
      });
      setSuccess(true);
      setForm({
        title: '', company: '', location: '', type: '', salary: '', description: '', requirements: '', tags: '', featured: false
      });
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to create job');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
{success && <div className="text-blue-600 text-sm">Job created successfully!</div>}
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" value={form.company} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" value={form.location} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Input id="type" name="type" value={form.type} onChange={handleChange} placeholder="e.g. Full-time, Part-time" required />
      </div>
      <div>
        <Label htmlFor="salary">Salary</Label>
        <Input id="salary" name="salary" value={form.salary} onChange={handleChange} placeholder="e.g. 1000" />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" value={form.description} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="requirements">Requirements</Label>
        <Textarea id="requirements" name="requirements" value={form.requirements} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input id="tags" name="tags" value={form.tags} onChange={handleChange} placeholder="e.g. remote, urgent" />
      </div>
      <div className="flex items-center gap-2">
        <input id="featured" name="featured" type="checkbox" checked={form.featured} onChange={handleChange} />
        <Label htmlFor="featured">Featured</Label>
      </div>
      <div className="flex gap-2 mt-4">
        <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Job'}</Button>
        {onCancel && <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>}
      </div>
    </form>
  );
}
